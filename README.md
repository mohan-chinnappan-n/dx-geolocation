# SFDX  App
## Sample SFDX project as described in:
[App Development with Salesforce DX](https://trailhead.salesforce.com/modules/sfdx_app_dev/units/sfdx_app_dev_setup_dx])

```bash
# SFDX commands

$ sfdx force:doc:commands:list
=== Commands
  force:alias:list                   # list username aliases for the Salesforce CLI
  force:alias:set                    # set username aliases for the Salesforce CLI

  force:apex:class:create            # create an Apex class
  force:apex:execute                 # execute anonymous Apex code
  force:apex:log:get                 # fetch a debug log
  force:apex:log:list                # list debug logs
  force:apex:test:report             # display test results
  force:apex:test:run                # invoke Apex tests
  force:apex:trigger:create          # create an Apex trigger

  force:auth:jwt:grant               # authorize an org using the JWT flow
  force:auth:sfdxurl:store           # authorize an org using an SFDX auth URL
  force:auth:web:login               # authorize an org using the web login flow

  force:config:get                   # get config var values for given names
  force:config:list                  # list config vars for the Salesforce CLI
  force:config:set                   # set config vars for the Salesforce CLI

  force:data:bulk:delete             # bulk delete records from a csv file
  force:data:bulk:status             # view the status of a bulk data load job or batch
  force:data:bulk:upsert             # bulk upsert records from a CSV file

  force:data:record:create           # create a record
  force:data:record:delete           # delete a record
  force:data:record:get              # view a record
  force:data:record:update           # update a record

  force:data:soql:query              # execute a SOQL query

  force:data:tree:export             # export data from an org into sObject tree format for force:data:tree:import consumption
  force:data:tree:import             # import data into an org using SObject Tree Save API

  force:doc:commands:display         # display help for force commands
  force:doc:commands:list            # list the force commands

  force:lightning:app:create         # create a Lightning app
  force:lightning:component:create   # create a Lightning component
  force:lightning:event:create       # create a Lightning event
  force:lightning:interface:create   # create a Lightning interface
  force:lightning:lint               # analyse (lint) Lightning component code
  force:lightning:test:create        # create a Lightning test
  force:lightning:test:install       # install Lightning Testing Service unmanaged package in your org
  force:lightning:test:run           # invoke Lightning component tests

  force:limits:api:display           # display current org’s limits

  force:mdapi:convert                # convert metadata from the Metadata API format into the Salesforce DX format
  force:mdapi:deploy                 # deploy metadata to an org using Metadata API
  force:mdapi:deploy:report          # check the status of a metadata deployment
  force:mdapi:retrieve               # retrieve metadata from an org using Metadata API
  force:mdapi:retrieve:report        # check the status of a metadata retrieval

  force:org:create                   # create a scratch org
  force:org:delete                   # mark a scratch org for deletion
  force:org:display                  # get org description
  force:org:list                     # list all orgs you’ve created or authenticated to
  force:org:open                     # open an org in your browser
  force:org:shape:create             # create a snapshot of org edition, features, and licenses
  force:org:shape:delete             # delete all org shapes for a target org
  force:org:shape:list               # list all org shapes you’ve created

  force:package1:version:create      # create a first-generation package version in the release org
  force:package1:version:create:get  # retrieve the status of a package version creation request
  force:package1:version:display     # display details about a first-generation package version
  force:package1:version:list        # list package versions for the specified first-generation package or for the org

  force:package2:create              # create a second-generation package
  force:package2:list                # list all second-generation packages in the Dev Hub org
  force:package2:update              # update a second-generation package
  force:package2:version:create      # create a second-generation package version
  force:package2:version:create:get  # retrieve a package version creation request
  force:package2:version:create:list # list package version creation requests
  force:package2:version:get         # retrieve a package version in the Dev Hub org
  force:package2:version:list        # list all package versions in the Dev Hub org
  force:package2:version:update      # update a second-generation package version

  force:package:install              # install a package in the target org
  force:package:install:get          # retrieve the status of a package installation request
  force:package:installed:list       # list the org’s installed packages
  force:package:uninstall            # uninstall a second-generation package from the target org
  force:package:uninstall:get        # retrieve status of package uninstall request

  force:project:create               # create a new SFDX project
  force:project:upgrade              # update project config files to the latest format

  force:schema:sobject:describe      # describe an object
  force:schema:sobject:list          # list all objects of a specified category

  force:source:convert               # convert Salesforce DX source into Metadata API format
  force:source:open                  # edit a Lightning Page with Lightning App Builder
  force:source:pull                  # pull source from the scratch org to the project
  force:source:push                  # push source to an org from the project
  force:source:status                # list local changes and/or changes in a scratch org

  force:user:create                  # create a user for a scratch org
  force:user:display                 # displays information about a user of a scratch org
  force:user:list                    # lists all users of a scratch org
  force:user:password:generate       # generate a password for scratch org users
  force:user:permset:assign          # assign a permission set to one or more users of an org

  force:visualforce:component:create # create a Visualforce component
  force:visualforce:page:create      # create a Visualforce page

```


