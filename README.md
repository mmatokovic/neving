# Neving - website

The Neving website built with [Tailwind](https://tailwindcss.com/) and [Hugo](https://gohugo.io/) hosted on [Netlify](https://www.netlify.com/).

## Installation

Start the local development server

```Bash
hugo server --disableFastRender --ignoreCache --noHTTPCache --buildDrafts
```

Taxonomy

* [Taxonomy templates](https://gohugo.io/templates/taxonomy-templates/)
* [lookup-order](https://gohugo.io/templates/lookup-order/)

```Yaml
[taxonomies]
  category = 'categories'
  tag = 'tags'
```

Categories:

* Careers, Refrences, Posts, Housing

Tags (Keywords):

* Lokacija: Zagreb, Sisak, Vinkovci
* Tip Projekta: Rotor, Trgovački centar, Knjižnica, Stadion, Sportska dvorana

## Branches

* The `main` branch is where the site is automatically built from, and is the place to put changes relevant to the current version.
* The `stage` branch is where we store changes that are related to the next release.
* The `dev` branch is where we store changes that are related to the next release.
* The `feature/` branch used for work on new feature.

## License

[Apache License 2.0](LICENSE)

## Author Information

[Mislav Matoković](https://github.com/mmatokovic)