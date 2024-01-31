let headerComponent = function () {
    let create = function (pageTitle, country) {
        let markdown = ``;
        if (pageTitle === undefined && country === undefined) {
            markdown = markdown + `---\n`;
            markdown = markdown + `title: Homepage\n`;
            markdown = markdown + `sidebar_position: 1\n`;
            markdown = markdown + `slug: /\n`;
            markdown = markdown + `---\n\n`;
            markdown = markdown + `# Top GitHub Users By Country `;
            markdown = markdown + `[<img alt="Image of insights" src="https://github.com/ePlus-DEV/view-counter/raw/main/graph/749591754/small/week.png" height="24"/>](https://github.com/ePlus-DEV/view-counter/blob/master/readme/749591754/week.md)\n`
            markdown = markdown + `[![Top GitHub Users](https://github.com/ePlus-DEV/top-github-users/actions/workflows/top.yml/badge.svg)](https://github.com/ePlus-DEV/top-github-users/actions/workflows/top.yml) `;
            markdown = markdown + `[![Image of insights](https://github.com/ePlus-DEV/view-counter/blob/main/svg/749591754/badge.svg)](https://github.com/ePlus-DEV/view-counter/blob/master/readme/749591754/week.md)\n\n`;
        } else {
            markdown = markdown + `---\n`;
            markdown = markdown + `title: ${country} \n`;
            markdown = markdown + `description: Top GitHub Users By ${pageTitle} in ${country} \n`;
            markdown = markdown + `---\n\n`;
            markdown = markdown + `# Top GitHub Users By ${pageTitle} in ${country} `;
            markdown = markdown + `[<img alt="Image of insights" src="https://github.com/ePlus-DEV/view-counter/raw/main/graph/749591754/small/week.png" height="24"/>](https://github.com/ePlus-DEV/view-counter/blob/master/readme/749591754/week.md)\n`
            markdown = markdown + `[![Top GitHub Users](https://github.com/ePlus-DEV/top-github-users/actions/workflows/top.yml/badge.svg)](https://github.com/ePlus-DEV/top-github-users/actions/workflows/top.yml) `;
            markdown = markdown + `[![Image of insights](https://github.com/ePlus-DEV/view-counter/blob/main/svg/749591754/badge.svg)](https://github.com/ePlus-DEV/view-counter/blob/master/readme/749591754/week.md)\n\n`;
        }
        return markdown;
    }
    return {
        create: create,
    };
}();
module.exports = headerComponent;