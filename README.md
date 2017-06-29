base-example
============

This is an example web app extending Onecommons Base.
Content in the following folders will overlay the corresponding folders in Base
providing an inheritance mechanism for the core components of an MVC web app:

`views`: (templates)
`public`: (static files)
`models`: (db schemas) Your app need to explicitly extend Base's models.
`routes`: (express routes)
`config`: (configuration files) Merges configuration from Base's config.
