<!-- @format -->

<template>
  <v-container fluid>
    <div class="timeline">
      <!-- Experience 1 -->
      <div class="timeline-item">
        <h4 class="item-title">Chinese Academy of Sciences</h4>
        <span class="item-period">Apr 2014 - Aug 2017</span>
        <span class="item-small">Software Engineer</span>
        <p class="item-description">
        <ul>
          <li>Worked as a software engineer in a large team for national tasks using Tensorflow and
            Python.
          </li>
          <li>Worked as a web developer, using php CMS frameworks (CI, Laravel, WordPress, Opencart,
            Prestashop, …), HTML5, CSS3 and JavaScript for medical, educational sites.</li>
        </ul>
        </p>
      </div>
      <!-- / Experience 1 -->

      <!-- Experience 2 -->
      <div class="timeline-item">
        <h4 class="item-title">True Prodigy (Texas, US)</h4>
        <span class="item-period">Dec 2017 - Mar 2019</span>
        <span class="item-small">Frontend developer (remote)</span>
        <p class="item-description">I started my career as a freelancer since 2015. Prodigy was one of
          my biggest clients, which I worked as frontend developer using React for.
          Work at Prodigy company as a Full-stack developer (MERN stack) and React-Native developer
          for Hybrid Mobile development. This was a big project and we were able to finish it
          successfully.
        </p>
      </div>
      <!-- / Experience 2 -->

      <!-- Experience 2 -->
      <div class="timeline-item">
        <h4 class="item-title">Snowfall Tech (London, UK)</h4>
        <span class="item-period">Nov 2016 - Feb 2018</span>
        <span class="item-small">Python Developer(DevOps) (remote)</span>
        <p class="item-description">Python is all the rage in the world and its frameworks are rapidly
          improving and releasing. I worked as Backend developer
          using Python frameworks(Flask/Django). After that, I participated in developing Artificial
          Intelligence part.</p>
      </div>
      <!-- / Experience 2 -->

      <!-- Experience 3 -->
      <div class="timeline-item">
        <h4 class="item-title">Brightcast (London, UK)</h4>
        <span class="item-period">Dec 2019 - Aug 2020</span>
        <span class="item-small">Full-stack developer (remote)</span>
        <p class="item-description">I worked alone with their CTO and I was responsible for both
          frontend (Angular) and backend (ASP.NET Core), even deploying to Azure.</p>
      </div>
      <!-- / Experience 3 -->

      <!-- Experience 3 -->
      <div class="timeline-item">
        <h4 class="item-title">TazzerClean (Rotherham, UK)</h4>
        <span class="item-period">Dec 2020 - Feb 2021</span>
        <span class="item-small">Project manager, DevOps</span>
        <p class="item-description">ASP.NET Core for backend API, Vue.js for frontend. My role was to
          assign tasks to other developers and
          to check their code, to merge, deploy the changes. I used to deploy with Azure Repos'
          pipelines and release. I used to work as a techincal supporter with DBMS, database
          structuure and project flow</p>
      </div>
      <!-- / Experience 3 -->
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.mdAndDown) return "width: 100%";
      return "width: 80%";
    },
  },
  data: () => ({}),
  methods: {
  },
};
</script>

<style scoped>
.timeline {
  border-left: 2px solid #e0e0e0;
  padding: 15px 0;
}

.timeline-item {
  position: relative;
  padding: 15px 20px 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-left: 2px solid #2196F3;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
}

.timeline-item:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:before {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -29px;
  border: 2px solid #2196F3;
  z-index: 2;
}

.timeline-item:after {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #2196F3;
  border-radius: 10px;
  width: 29px;
  height: 2px;
  top: 25px;
  left: -29px;
  z-index: 1;
}

.timeline-item .item-title {
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.2em;
}

.timeline-item .item-period {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #2196F3;
  margin-bottom: 8px;
}

.timeline-item .item-small {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #9e9e9e;
  margin-left: 5px;
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 1px solid #e0e0e0;
}
</style>
