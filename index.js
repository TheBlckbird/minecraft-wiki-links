document
    .querySelectorAll('a[href*="minecraft.fandom.com/wiki"]')
    .forEach((a) => {
        a.style.borderBottom = '1px solid rgb(232, 7, 3)'
        a.href = a.href.replace('minecraft.fandom.com/wiki', 'minecraft.wiki')
        console.log(a.href)
    })
