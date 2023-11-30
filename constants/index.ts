
// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'team', label: 'Team' },
    { href: '/', key: 'contact', label: 'Contact' },
    { href: '/', key: 'careers ', label: 'Careers' },
  ];
  

  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Infrastructure',
      icon: '/infra.svg',
      description:
        'Automated Cloud Infrastructure Workflow',
    },
    {
      title: 'Security',
      icon: '/cyber.svg',
      description:
        "Modern Secure Infrastructure Approach",
    },
    {
      title: 'Networking',
      icon: '/net.svg',
      description:
        'Flexible Secure Application Connectivity',
    },
    {
      title: 'Applications',
      icon: '/dev.svg',
      description:
        'Automate Application Deployment for Agility',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Our Links',
      links: [
        'Home',
        'About Us',
        'Integrations',
        'Team',
        'Blog',
      ],
    },
    {
      title: 'Others Links',
      links: ['FAQ', 'Careers', 'Privacy Policy','Terms & Condition','Support'],
    },
  ];
  
  export const FOOTER_OUR_SERVICES = {
    title: 'Our Services',
    links: [
      'Infrastructure provisioning',
      'Network infrastructure automation',
      'Cost optimization',
      'Cloud migration',
      'Kubernetes at scale'
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  //Scaling data
  export const SCALING=[
    {
      title:'Real-time risk monitoring',
      image:'/real-time.png',
      desc:'Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.'
    },
    {
      title:'Collaborative workflows',
      image:'/collaboration.png',
      desc:'Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.'
    }
  ]

  //Feature nav links
  export const FEATURE_LINK=[
    {
      label:'Apps',
      key:'apps',
      href:'/'
    },
    {
      label:'App Config',
      key:'app config',
      href:'/'
    },
    {
      label:'Pipelines',
      key:'pipe',
      href:'/'
    },
    {
      label:'Infra Creation',
      key:'Infra',
      href:'/'
    },
    {
      label:'Cost',
      key:'cost',
      href:'/'
    },
    {
      label:'Add-Ons',
      key:'add',
      href:'/'
    },
    {
      label:'Monitoring',
      key:'montoring',
      href:'/'
    },
    {
      label:'Connection',
      key:'connections',
      href:'/'
    },
  ]

  //Way links ...
  
  export const WAY_ITEMS_lEFT = [
    
    {
      head2:'Configurable Build and Deploy pipelines',
      para:'Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.',
      image:'/deploy.png'
    },
    {
      head2:'Push to Deploy',
      para:'Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.',
      image:'/tools.png'
    },
    {
      head2:'Multiple runtimes',
      para:'Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.',
      image:'/tools.png'
    },
    {
      head2:'Scale infinitely',
      para:'Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.',
      image:'/scale.png'
    },
    {
      head2:'Customizable cost dashboards and reports',
      para:'Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.',
      image:'/cost.png'
    },
    {
      head2:'Preview infra costs',
      para:'See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.',
      image:'/observability.png'
    },
    {
      head2:'Observability from day one',
      para:'Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.',
      image:'/scale.png'
    },

  ] 

  