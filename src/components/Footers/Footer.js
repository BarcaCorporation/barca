/***************************************************************************************
 *                    _____      ___      ______     _______      ___                   
 *  Project          |  _  \    / _ \    |   _  \   /  _____|    / _ \                  
 *                   | |_|  |  / |_) \   |  |_)  | |  |         / |_) \                 
 *                   |  _  <  /  ___  \  |   _  <  |  |        /   __  \                
 *                   | |_|  |/  /   \  \ |  | \  \ |  \_____  /  /   \  \               
 *                   \_____//__/     \__\|__|  \__\\________|/__/     \__\              
 *
 * Copyright (C) 2021 - 2022, Aníbal Souza, <annibalhsouza@gmail.com>  GitHub: @ahsouza. 
 *
 * This software is licensed as described in the file COPYING, which                    
 * you should have received as part of this distribution. The terms                     
 * are also available at https://project-barca.github.io/docs/copyright.html.           
 *
 * You may opt to use, copy, modify, merge, publish, distribute and/or sell             
 * copies of the Software, and permit persons to whom the Software is                   
 * furnished to do so, under the terms of the COPYING file.                             
 *
 * This software is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY            
 * KIND, either express or implied.                                                      
 *
 ****************************************************************************************/
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-4/12 px-4">
              <h4 className="text-3xl font-semibold">Pronto para começar?</h4>
              <br></br>
              <h5 className="text-lg mt-0 mb-4 text-blueGray-600">
                Garanta que sua empresa tenha as ferramentas necessárias para se manter produtiva, moderna e criativa.
              </h5>
              <div className="mt-8 lg:mb-0 mb-6">
                <a href="https://twitter.com/barca.io" target="_blank">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                </a>
                <a target="_blank" href="https://facebook.com/barca-project">
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/barca-project">
                  <button
                    className="bg-white text-lightBlue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
                <a target="_blank" href="https://github.com/project-barca">
                  <button
                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4">

              <div className="flex flex-wrap items-top mb-6">
                
                {/* PRODUTOS */}
                <div className="w-full lg:w-3/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Produtos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/project-barca"
                      >
                        Barca Free
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/project-barca"
                      >
                        Barca Pro
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/project-barca"
                      >
                        Barca Enterprise
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/project-barca"
                      >
                        Barca Plus
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/project-barca"
                      >
                        Download
                      </a>
                    </li>
                  </ul>
                </div>
                {/* SOLUÇÕES */}
                <div className="w-full lg:w-3/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Soluções
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Cloud
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Segurança
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Infraestrutura
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Web & Mobile
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Gerenciamento de API
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Open Source
                      </a>
                    </li>
                  </ul>
                </div>
                {/* RECURSOS */}
                <div className="w-full lg:w-3/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Recursos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://barca.io/documentation/v1/intro"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://barca.io/getstarted/"
                      >
                        Início Rápido
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://bwc.barca.io/doc"
                      >
                        Aprender Barca Cloud
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://barca.io/ebooks/"
                      >
                        Ebooks
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.barca.io/"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://developers.barca.io/"
                      >
                        Barca Developers
                      </a>
                    </li>
                  </ul>
                </div>
                {/* ECOSSISTEMA */}
                <div className="w-full lg:w-3/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Ecossistema
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://download.barca.io/desktop"
                      >
                        Barca Web Cloud
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://download.barca.io/sdk"
                      >
                        Barca Market
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://download.barca.io/cli"
                      >
                        Barca Acadêmico
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://download.barca.io/engine"
                      >
                        Barca Store
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://download.barca.io/engine"
                      >
                        Barca Cine
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://download.barca.io/engine"
                      >
                        Barca AI
                      </a>
                    </li>
                  </ul>
                </div>
                {/* SOBRE NOS */}
                <div className="w-full lg:w-3/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Sobre
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.barca.io/post/about/intro#why"
                      >
                        Por que Barca?
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://barca.io/events/"
                      >
                        Eventos
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://careers.barca.io"
                      >
                        Trabalhe Conosco
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://contact.barca.io"
                      >
                        Contate-Nos
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://community.barca.io"
                      >
                        Comunidade
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.barca.io"
                      >
                        Notícias
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Project Barca by{" "}
                <a
                  href="https://github.com/ahsouza"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Aníbal Souza
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
