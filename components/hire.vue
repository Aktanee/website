<template>
  <div class="hire">
    <div class="subtitle">
      About myself
    </div>
    <div class="content">
      <p>
        I'm a self-defined Fullstack Developper with +3 years of working on the
        <b>Front Side</b> (React, Vue, Building Interface, Accessibility), on
        the <b>Back Side</b> (Node.js, Ruby on Rails, Python) and on the
        <b>Server Side</b> (Deployment, Docker, CI/CD) with a liking of
        automating my workplace. I studied during 5+ years full stack
        development, Interface creation and project management with an initial
        background and interest of art study.
      </p>

      <p>
        I'm looking forward to working on new technologies, developing a more
        active voice in the tech community, and being in kind and diverse
        workplace environment. I also enjoy creating, developing and
        communicating about well defined projects that have a purpose of helping
        others. I find that I work best on small teams with clear processes and
        mentoring baked in, but it's also something I'm used to bring with me!
      </p>

      <p>
        You can find here <a href="/pdf/antoine-renault-en.pdf">my resume</a>,
        <nuxt-link to="/projects">my latest projects</nuxt-link>,
        <a href="https://github.com/Aktanee/">my open source codes</a> and soon
        my thoughts on this website. I'm currently reading
        <a href="https://www.goodreads.com/series/112296-the-broken-earth"
          >"The Broken Earth" trilogy by N. K. Jemisin</a
        >
        and my latest favorite album is
        <a
          href="https://open.spotify.com/album/1dZZh7PvVgce1DDsDPzy8Z?si=LgeLNjBCR_imLLGK9SoIMQ"
          >"99,9%" by Kaytranada</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hire"
};
</script>

<style lang="scss">
.hire {
  margin: 60px 0 0 0;
}

.content {
  font-size: 1.2em;

  p {
    margin-bottom: 1em;
  }
}
</style>
