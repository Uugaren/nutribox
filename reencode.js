// Este script foi criado caso o vídeo original (Ingredients_falling_into_202604231516.mp4)
// apresente travamentos ("stuttering") ao fazer o scroll no navegador.
//
// ATENÇÃO: Como você não tem o ffmpeg instalado no computador, vamos baixar um 
// binário automático via NPM. Antes de rodar este script, execute no terminal:
// npm install @ffmpeg-installer/ffmpeg
//
// Depois, rode:
// node reencode.js

import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Para contornar a falta do ffmpeg no Windows, usamos um binário portátil via NPM
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, 'Ingredients_falling_into_202604231516.mp4');
const outputFile = path.join(__dirname, 'Ingredients_falling_keyframed.mp4');
const ffmpegPath = ffmpegInstaller.path;

console.log(`Iniciando re-encoding do vídeo para uso em scrolltelling...`);
console.log(`Usando FFmpeg portátil em: ${ffmpegPath}`);
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);
console.log(`\nIsso pode demorar alguns minutos dependendo do tamanho do vídeo e do seu computador...\n`);

const command = `"${ffmpegPath}" -i "${inputFile}" -c:v libx264 -x264opts keyint=1:min-keyint=1 -an "${outputFile}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`\n[ERRO] Ocorreu um problema ao executar o FFmpeg portátil: ${error.message}`);
    return;
  }
  
  if (stderr) {
    // O FFmpeg joga a saída de progresso no stderr
    console.log(stderr);
  }
  
  console.log(`\n[SUCESSO] Vídeo re-encodado com sucesso!`);
  console.log(`Agora, basta ir no arquivo 'src/components/Hero.jsx' e alterar o import na linha 5:`);
  console.log(`DE:   import videoUrl from "../../Ingredients_falling_into_202604231516.mp4";`);
  console.log(`PARA: import videoUrl from "../../Ingredients_falling_keyframed.mp4";`);
});
