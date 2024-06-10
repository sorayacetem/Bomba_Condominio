
document.addEventListener("DOMContentLoaded", function () {
    // Configuração do menu
    const usuarioConectado = "Nome do Usuário";
    const horaAtual = new Date().toLocaleTimeString();
    const menuItems = [
      { label: "PRINCIPAL", id: "menu-principal", imageSrc: "../img/home.svg", link: "principal.html"  },
      { label: "DADOS", id: "menu-dados", imageSrc: "../img/data.svg", link: "dados.html"  },
      { label: "MEDIDOR", id: "menu-medidor", imageSrc: "../img/medidor.svg", link: "medidor.html"  },
      { label: "ALARMES", id: "menu-alarme", imageSrc: "../img/alarme.svg", link: "alarmes.html"  },
      { label: "SAIR", id: "menu-sair", imageSrc: "../img/logout.svg"  },
      { label: "", id: "session", user: usuarioConectado, time: horaAtual},
      { label: "", id: "logoArterisMenu", imageSrc: "../img/arteris.png"  },
      { label: "", id: "logoCetemMenu", imageSrc: "../img/logoCetem.png"  },
    ];

  // Adiciona o menu à página
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu";
  const menuList = document.createElement("ul");

  menuItems.forEach(item => {
    const menuItem = document.createElement("li");
    menuItem.id = item.id;

    if (item.label) {
        // Adiciona a div ao item do menu
      const iconContainer = document.createElement("div");
      iconContainer.classList.add("icon-container");

      // Adiciona o SVG ao item do menu
      const svgImage = document.createElement("img");
      svgImage.src = item.imageSrc;
      svgImage.alt = item.label;
      iconContainer.appendChild(svgImage);

      // Adiciona a div ao item do menu
      menuItem.appendChild(iconContainer);

      // Adiciona o texto do menu
      const labelText = document.createElement("span");
      labelText.textContent = item.label;
      labelText.classList.add("menu-label"); // Adiciona classe para os spans dos 4 primeiros itens
      menuItem.appendChild(labelText);
    } else if (item.user && item.time) {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user-style");
      userDiv.textContent = item.user;

      const timeDiv = document.createElement("div");
      timeDiv.classList.add("time-style");
      timeDiv.textContent = item.time;

      menuItem.appendChild(userDiv);
      menuItem.appendChild(timeDiv);
    } else {
      // Adiciona o SVG ao item do menu (logos)
      const logoImage = document.createElement("img");
      logoImage.src = item.imageSrc;
      logoImage.alt = item.id;
      menuItem.appendChild(logoImage);
    }    

    // Adiciona a classe "center" aos 4 primeiros itens do menu
    if (item.id === "menu-principal" || item.id === "menu-dados" || item.id === "menu-medidor" || item.id === "menu-alarme" || item.id === "menu-sair") {
        menuItem.classList.add("center");

      }

    // Adiciona o evento de clique para redirecionar para a página específica
    if (item.link) {
      menuItem.addEventListener("click", function () {
        redirectToPage(item.link);
      });
    }

    menuList.appendChild(menuItem);
  });

  menuContainer.appendChild(menuList);
  document.body.prepend(menuContainer);

  // Função para redirecionar para a página específica
  function redirectToPage(link) {
    window.location.href = link;
  }
    // Função para destacar a página atual
    function highlightCurrentPage() {
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo da URL
    const menuItem = menuItems.find(item => item.link === currentPage);

    if (menuItem) {
        const iconContainer = document.getElementById(menuItem.id).querySelector(".icon-container");
        const svgImage = iconContainer.querySelector("img");
        svgImage.style.filter = "saturate(100%) invert(57%) sepia(100%) saturate(7000%) hue-rotate(160deg) brightness(100%) contrast(113%)";
        const labelText = document.getElementById(menuItem.id).querySelector(".menu-label");
      if (labelText) {
        labelText.style.color = "#009265";
      }

    }
}
    // Chama a função para destacar a página atual
    highlightCurrentPage();

});



