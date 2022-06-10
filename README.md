# CompleteAngularGuide (Version 13.3.0)

# create workspace (e.g MultipleApps)
  ng new MultipleApps --createApplication="false" --no-strict
# create application (e.g my-app)
  ng g application my-app --no-strict
# create component without spec files 
  ng g c component-name --skip-tests
  ## --no-strict is optional
     If we want to make strict = false in tsconfig.json

  In this work-space most application are made having --no-strict false.
  - make add routing : false
  - choose style sheet : css