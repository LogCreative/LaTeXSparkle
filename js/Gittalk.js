var gitalk = new Gitalk({
    clientID: '3b956ce38aa43c3b744d',
    clientSecret: 'f54320278ab685a3ae9c135df2f8770779628324',
    repo: 'LaTeXSparkle',
    owner: 'LogCreative',
    admin: ['LogCreative'],
    id: 'ContentSuggestion',      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
  })
  
  gitalk.render('gitalk-container')