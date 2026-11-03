# Credits and licences (preview build)

All tools used are free. Each licence below was checked against the original LICENSE file or model card, and the source is quoted.

## Voiceover (media/intro.mp4, media/intro.webm, media/intro.en.vtt; 32.2 s)
- **Engine: Piper TTS**, standalone release 2023.11.14-2, https://github.com/rhasspy/piper
  - Licence: MIT. Source: https://github.com/rhasspy/piper/blob/master/LICENSE.md, which reads "MIT License … Copyright (c) 2022 Michael Hansen".
  - Piper was used offline to generate audio. It is not shipped with the site.
- **Voice: en_US-john-medium**, https://huggingface.co/rhasspy/piper-voices/tree/main/en/en_US/john/medium
  - Model card, re-fetched 2026-10-23 from https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/john/medium/MODEL_CARD (copy in licenses/piper-voice-en_US-john-medium.MODEL_CARD.md): "## Dataset * URL: https://librivox.org * License: public domain" and "Finetuned from Kristin (above) on medium quality settings for an additional 600 epochs. … All recordings came from LibriVox.org."
  - Parent voice kristin, model card (copy in licenses/piper-voice-en_US-kristin-medium.MODEL_CARD.md): "* URL: https://librivox.org * License: public domain" and "Trained from scratch on medium quality settings for 2000 epochs."
  - Repository licence: the piper-voices README front matter says `license: mit`. The repository has no separate LICENSE file; see licenses/piper-voices-MIT.txt for the exact quoted text.
  - Settings: length_scale 1.06, noise_scale 0.62, noise_w 0.78, synthesized phrase by phrase (script src-3d/vo_v2.py, not shipped).
- **Phonemiser: espeak-ng**, bundled inside the Piper binary. Licence: GPL-3.0.
  - It was used only as a build tool. No espeak-ng code is in the site.
  - The GPL allows commercial use.
- **Voices not used:**
  - "lessac": its model card points to the Blizzard 2013 licence, which wasn't verified.
  - "hfc_female": CC BY-NC-SA, which doesn't allow commercial use.
- **Script:** word for word the caption text in media/intro.en.vtt, including the closing disclaimer and stop cue.
- **Music:** none.

## 3D character loops (media/3d/)
- Rendered with **three.js r169** (source: https://github.com/mrdoob/three.js, tag r169), vendored in vendor/three/ for the build only: no shipped page loads it, so it is not in the site package. A copy of the LICENSE is in licenses/three.js-LICENSE.txt. Licence: MIT.
  - Source: vendor/three/LICENSE (in the source tree), which reads "The MIT License, Copyright © 2010-2024 three.js authors". The npm package.json says `"license": "MIT"`.
- Models, poses and render scripts (src-3d/) were made for this project.
- Encoded with FFmpeg as H.264, VP9 and WebP.
  - FFmpeg was used only as a build tool. Nothing from it ships with the site.

## Follow-along mode
- Uses no third-party code, sounds or music.

## Joint drawings (img/anatomy/)
- **Source:** Wikimedia Commons files Gray342.png (hip), Gray347.png (knee) and Gray356.png (ankle).
  - https://commons.wikimedia.org/wiki/File:Gray342.png
  - https://commons.wikimedia.org/wiki/File:Gray347.png
  - https://commons.wikimedia.org/wiki/File:Gray356.png
- **Artist:** Henry Vandyke Carter. **Book:** Henry Gray (1918), *Anatomy of the Human Body*, Bartleby.com plates 342, 347 and 356.
- **Licence:** public domain. The Commons API extmetadata for all three files (saved in src-art/*.json) reads `"LicenseShortName": "Public domain"`, `"UsageTerms": "Public domain"`, `"Copyrighted": "False"`.
- **Changes:** labels and leader lines removed by inpainting, cropped to a square, recoloured to the site's ink and paper colours, exported as WebP at 160 and 320 px. Script: src-art/anatomy.py (not shipped).
- Commercial use: public-domain works have no copyright restriction on commercial use. Credit is given anyway.

## Typeface (fonts/archivo-display-700.woff2)
- **Archivo**, https://github.com/Omnibus-Type/Archivo (made from the Archivo variable font), downloaded from https://github.com/google/fonts/tree/main/ofl/archivo.
- **Licence:** SIL Open Font License 1.1. Source: ofl/archivo/OFL.txt, which reads "Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo) This Font Software is licensed under the SIL Open Font License, Version 1.1." The METADATA.pb in the same folder says `license: "OFL"`. Full text: licenses/Archivo-OFL.txt.
- The OFL allows commercial use and embedding on websites. The shipped file, fonts/archivo-display-700.woff2 (7,292 bytes), is a static, Latin-subset instance of Archivo at **weight 700**: read with fontTools, it has no variation axes (no fvar table), OS/2 usWeightClass 700, usWidthClass 6 (semi-expanded) and 128 glyphs. Its name table keeps the copyright line quoted above. It is used for display text (headings, buttons, the brand name); body text uses the system font stack. The font name was not changed, which the OFL allows because no Reserved Font Name is declared in OFL.txt.

## Logo, favicons and OG image
- The logo mark, favicon set (favicon.svg, favicon.ico, apple-touch-icon.png, img/icon-*.png) and img/og-1200x630.jpg were made for this project. The OG image uses the project's own hero illustration and the Archivo font. Script: src-art/brandgen.py (not shipped).

## Not shipped
- qa/, src-3d/ and src-art/ are build and QA material and are not part of the site package. They are in RunBetterToday-preview-qa.zip. Work-in-progress files (wip/, *-wip), backups (backup-*) and the character v3 pilot renders are in neither package.

## 3D character v2 loops (media/3d/, made 2026-10-23)
- The character design (a runner in a blue cap with blue shirt trim), the procedural geometry (`src-3d/render3d-v2.html`), the rig (`src-3d/rig.py`) and the keyframes (`src-3d/exercises3d.py`) are original work made for this project. No third-party models, textures or motion capture were used.
- Rendered with **three.js r169**, which is vendored and MIT-licensed (licenses/three.js-LICENSE.txt). The renderer was headless Chromium through Playwright (Apache-2.0), used as a build tool only.
- Encoded with **FFmpeg** as H.264, VP9 and WebP. It was a build tool only, and nothing from it ships.
- Contact sheets were made with Pillow (HPND licence), a build tool only.

## Home hero loop (media/hero/hero-loop.av1.webm, .vp9.webm, .mp4, hero-loop-poster.webp)
- Version v2b (2026-10-24): the v2 character jogging in place. It is original work, rendered with **three.js r169** (MIT, licenses/three.js-LICENSE.txt) by src-3d/hero_v2b.py using src-3d/render3d-v2-hero.html (a copy of render3d-v2.html with a transparent background and the cap raised). Headless Chromium through Playwright (Apache-2.0) was used as a build tool only.
- Background: the project's own hero landscape illustration (the earlier version of img/hero-1920.webp), with the sun redrawn smaller and clear of the runner's head by hero_v2b.py using Pillow (HPND, build tool only). The 1280x640 frames are composited over it.
- Encoded with FFmpeg using SVT-AV1 (BSD-3-Clause-Clear), libvpx (BSD-3-Clause) and x264 (GPL-2.0). These were build tools only, and nothing from them ships.

## Today's Workout video (media/workout/todays-workout-2026-10-24.*)
- Character and walk cycle on a road: original procedural three.js render (src-3d/walk_v2.py, road prop in render3d-v2.html). Exercise footage reuses this project's own v2 clips (media/3d/*). three.js is MIT (already logged).
- Voice: Piper en_US-john-medium, the same voice and licence as the intro voiceover v2 (dataset public domain, LibriVox; Piper MIT). Settings: length_scale 1.06, noise_scale 0.62, noise_w 0.78, sentence_silence 0.32.
- On-screen text: DejaVu Sans / Sans Bold (Bitstream Vera / DejaVu free licence, commercial use allowed). Licence: licenses/dejavu-fonts-LICENSE.txt. The fonts are burned into the video, not embedded.
- Music: none. No CC0 or Pixabay-licence track was verified with a saved licence page, so none was used.
- Tools: ffmpeg (used as a tool only) and Playwright (Apache-2.0).




## Today's Workout daily video (media/workout/todays-workout-2026-11-02.*; v6 pipeline, made 2026-11-01)
- **Characters:** the v6 male/female (Universal Base Characters [Standard] by Quaternius, https://quaternius.com/packs/universalbasecharacters.html, CC0 1.0; attribution not required but given), with our own clothes, trainers and materials from character_v6.py. One is picked per day by a date-seeded RNG (2026-11-02: the woman).
- **Motion:** our own keyframes (src-3d/rig.py, src-3d/exercises3d.py, the walk/idle keys from walk_v2.py/idle3d.py), retargeted onto the v6 skeleton by daily/v6_cycles.py. No motion capture or third-party animation.
- **Exercise mat:** a plain box made in the script. No third-party models or textures.
- **Rendering:** Blender 4.5.15 LTS Cycles (GPL; Cycles Apache-2.0) with OIDN denoising (Apache-2.0). Build tools only; nothing from them ships.
- Voice: Sky, generated with Kokoro-82M (hexgrad), Apache-2.0, via kokoro-onnx (MIT). AI-generated voice. (From r2, 2 Nov 2026; replaces Piper en_US-john-medium. Generated locally; the video shows an "AI voice" note and the .json says so.)
- **Text:** DejaVu Sans (Bitstream Vera licence / public domain changes; free for commercial use), burned into the video by FFmpeg. This is the same as the previous daily video.
- **Music/SFX:** none.
