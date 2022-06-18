# CompleteAngularGuide (Version 13.3.0)

# create workspace (e.g MultipleApps)
  ng new MultipleApps --createApplication="false" --no-strict
# create application (e.g my-app)
  ng g application my-app --no-strict
# create component without spec files 
  ng g c component-name --skip-tests
  ## --no-strict is optional
     * It does strict = false in tsconfig.json
     * In this work-space most application are made having --no-strict false.
     * while installing an application choosed below options
        ? Would you like to add Angular routing? No
        ? Which stylesheet format would you like to use? CSS
  