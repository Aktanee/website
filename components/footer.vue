<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-head">
        <div class="name">Antoine Renault</div>
        <div class="contact">
          antoine.renault.mmi@gmail.com
        </div>
        <div class="job-title">
          Fullstack developper specialized in Javascript
        </div>
      </div>
      <div class="menu">
        <div class="menu-item">
          <div class="title">Contact</div>

          <div class="menu-item-content">
            <p>
              <a href="mailto:antoine.renault.mmi@gmail.com"
                >antoine.renault.mmi@gmail.com</a
              >
            </p>
          </div>
        </div>

        <div class="menu-item">
          <div class="title">Social</div>

          <div class="menu-item-content">
            <p>
              <a href="https://github.com/Aktanee">
                Github
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/antoine-renault-a84b6398/?locale=en_US"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright Antoine Renault 2018 ©
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$footer-grey: #949393;

.footer {
  background-color: #252525;
  color: $footer-grey;
  padding: 40px 30px;
  font-size: 0.9em;
}

.footer-content {
  max-width: $large-width;
  margin: auto;
}

.name {
  font-size: 1.3em;
  color: $light-grey;
  margin: 0 0 -2px 0;
}

.contact {
  color: $mainColor;
}

.job-title {
  margin: 10px 0;
}

.copyright {
  text-align: center;
  font-size: 0.8em;
  margin: 60px 0 0 0;
}

.menu {
  overflow: auto;
  margin: 60px 0 0 0;
}

.menu-item {
  margin: 0 80px 20px 0;
  float: left;

  .title {
    color: white;
    margin: 0 0 20px 0;
  }

  a {
    color: $footer-grey;
    text-decoration: none;
  }
}
</style>
