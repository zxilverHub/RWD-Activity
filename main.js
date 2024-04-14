const works = document.querySelector('.works')
const worksContent = [

    {
        name: "News homepage",
        imge: "./works/news homepage.jpg",
        link: "https://zxilverhub.github.io/newhompagezx.io/"
    },

    {
        name: "Rest country",
        imge: "./works/rest country.jpg",
        link: "https://zxilverhub.github.io/restcountriesapi/"
    },

    {
        name: "Time tracking dashboard",
        imge: "./works/time tracking dashboard.jpg",
        link: "https://zxilverhub.github.io/time-tracking-dashboard-main/"
    },

    {
        name: "Url shortening",
        imge: "./works/url shortening.jpg",
        link: "https://zxilverhub.github.io/shortly-url/"
    },

    {
        name: "E-commerce product page",
        imge: "./works/e-commerce product page.jpg",
        link: "https://zxilverhub.github.io/e-commerceproductpagezx/"
    },

    {
        name: "Advice generator app",
        imge: "./works/advice generator app.jpg",
        link: "https://zxilverhub.github.io/advice-generator-app-main-zx/"
    },

    {
        name: "Interactive card details",
        imge: "./works/interactive card details.jpg",
        link: "https://zxilverhub.github.io/card-detail-form/"
    },

    {
        name: "Easy bank landing page",
        imge: "./works/easy bank landing page.jpg",
        link: "https://zxilverhub.github.io/easybank.io/"
    }
]

worksContent.forEach(content => {
    works.innerHTML += `
    <div class="card">
    <img
      src="${content.imge}"
      alt="e-commerce"
      title="${content.name}"
    />
    <p class="work-name">${content.name}</p>
    <a href="${content.link}" target="_blank" class="view-project">View project</a>
  </div>
    `
})


const menu = document.querySelector('header .menu'),
    ul = document.querySelector('header nav ul'),
    lis = ul.querySelectorAll('li'),
    mobilebg = document.querySelector('.mobile-bg');

menu.addEventListener('click', ()=> {
    ul.classList.toggle('spread');
    mobilebg.classList.toggle('block')
})

lis.forEach(li => {
    li.addEventListener('click', ()=> {
        ul.classList.remove('spread')
        mobilebg.classList.remove('block')
    })
})

mobilebg.addEventListener('click', ()=>{
    ul.classList.remove('spread')
    mobilebg.classList.remove('block')
})