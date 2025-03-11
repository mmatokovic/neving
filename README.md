# Neving - website

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/d6cef03d-ee00-4ae5-9830-afce67e9f02f/deploy-status)](https://app.netlify.com/sites/neving/deploys)

The Neving website built with [Tailwind](https://tailwindcss.com/) and [Hugo](https://gohugo.io/) hosted on [Netlify](https://www.netlify.com/).

## Installation

Start the local development server

```Bash
hugo server  -F -N -D
```

Taxonomy

* [Taxonomy templates](https://gohugo.io/templates/taxonomy-templates/)
* [lookup-order](https://gohugo.io/templates/lookup-order/)

```Yaml
[taxonomies]
  category = 'categories' #Rotor, Trgovački centar, Knjižnica, Stadion, Sportska dvorana, residential
  tag = 'tags' #Keywords: Zagreb, Sisak, Vinkovci 
```

## Branches

* The `main` branch is where the site is automatically built from, and is the place to put changes relevant to the current version.
* The `stage` branch is where we store changes that are related to the next release.
* The `dev` branch is where we store changes that are related to the next release.
* The `feature/` branch used for work on new feature.

## License

[Apache License 2.0](LICENSE)

## Author Information

[Mislav Matoković](https://github.com/mmatokovic)