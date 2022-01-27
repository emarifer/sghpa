import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

/**
 * SOLICITAR ACTUALIZACIÓN DE CONTENIDO NUEVO:
 * https://github.com/antfu/vite-plugin-pwa/issues/156#issuecomment-970165872
 * https://vite-plugin-pwa.netlify.app/guide/prompt-for-update.html
 *
 * Errores IDE 'No se puede encontrar el módulo' (ts2307). CONFIGURACION RECOMENDABLE:
 * https://vite-plugin-pwa.netlify.app/guide/faq.html#ide-errors-cannot-find-module-ts2307
 *
 * PAR EL ERROR DE TYPES SE BUSCO «CANNOT FIND MODULE 'VIRTUAL:PWA-REGISTER' OR ITS CORRESPONDING TYPE DECLARATIONS».
 * PROPORCIONAR TIPOS PARA LAS FUNCIONES DEL CLIENTE DEL MÓDULO 'virtual:pwa-register':
 * https://githubmemory.com/repo/antfu/vite-plugin-pwa/issues/40
 * https://github.com/antfu/vite-plugin-pwa/issues/38
 * https://github.com/antfu/vite-plugin-pwa/blob/main/client.d.ts
 *
 * GIT CLONE BRANCH: CÓMO CLONAR UNA RAMA ESPECÍFICA:
 * https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/
 *
 * Git Delete Branch – How to Remove a Local or Remote Branch:
 * https://www.freecodecamp.org/news/git-delete-branch-how-to-remove-a-local-or-remote-branch/
 *
 * Bash: duplicar + renombrar carpeta:
 * https://stackoverflow.com/questions/33343840/bash-duplicate-rename-folder#33366590
 *
 * SOBRE EL USO DE LA BIBLIOTECA SWEETALERT:
 * https://sweetalert2.github.io/
 *
 * S(GH)PA: EL TRUCO DE LA APLICACIÓN DE UNA SOLA PÁGINA PARA LAS PÁGINAS DE GITHUB:
 * https://www.smashingmagazine.com/2016/08/sghpa-single-page-app-hack-github-pages/
 */
