const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

// Map our language codes to MyMemory format (source|target)
const toMyMemoryLang = (code) => (code === 'zh' ? 'zh-CN' : code);

// Simple health check
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

// Translation endpoint using MyMemory API (free, no key)
app.post('/api/translate', async (req, res) => {
  const { texts, sourceLang, targetLang } = req.body || {};

  if (!Array.isArray(texts) || !texts.length) {
    return res.status(400).json({ error: 'texts array is required' });
  }

  const source = toMyMemoryLang(sourceLang || 'en');
  const target = toMyMemoryLang(targetLang);
  const langpair = `${source}|${target}`;

  const result = [...texts];

  try {
    for (let i = 0; i < texts.length; i++) {
      const raw = texts[i];
      if (raw == null || String(raw).trim() === '') continue;

      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(String(raw).trim())}&langpair=${langpair}`;
      const response = await fetch(url);

      if (!response.ok) {
        console.error('MyMemory error:', await response.text());
        continue;
      }

      const data = await response.json();
      const translated = data.responseData?.translatedText;
      if (translated) result[i] = translated;
    }

    res.json({ translations: result });
  } catch (err) {
    console.error('Translation error:', err);
    res.status(500).json({ error: 'Internal translation error' });
  }
});

app.listen(PORT, () => {
  console.log(`RealShow AI server running at http://localhost:${PORT}`);
});

