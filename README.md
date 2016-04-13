## fis3-parser-arttemplate

```json
'/mods/**.tmpl': {
    rExt: '.js',
    isJsLike: true,
    isMod: true,
    parser: fis.plugin('arttemplate', {
      wrapper: ['var template=require("/static/bdbox/template");',
        '${content}',
        'module.exports = function(id, data){',
        'if(!data){return template("${id}",id);}',
        'var html = template("${id}", data);',
        'document.getElementById(id).innerHTML = html;', '}'
      ].join('\n')
    })
  },
```
