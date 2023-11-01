module.exports = {
  mode: 'jit',
  content: [
    './app/views/**/*.html.erb',
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
}
