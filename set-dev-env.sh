#!/usr/bin/env bash

echo \"Deleting ./.cache/\" 
rm -rf ./.cache
echo \"Deleting ./public/\"
rm -rf ./public
export GATSBY_EXPLORE_URL="https://dev.singlecell.gi.ucsc.edu/explore/"
export GATSBY_FILE_SUMMARY_API_URL="https://service.dev.singlecell.gi.ucsc.edu/index/summary"
export GATSBY_PORTAL_URL="https://dev.singlecell.gi.ucsc.edu/"
export GATSBY_TERM_FACETS_API_URL="https://service.dev.singlecell.gi.ucsc.edu/index/projects"
export GATSBY_SYSTEM_HEALTH_CHECK_API_URL="https://service.dev.singlecell.gi.ucsc.edu/health/progress"
export GATSBY_DEFAULT_CATALOG="dcp2"
export GATSBY_ATLAS="hca"
export GATSBY_ENV="LOCAL"
export GATSBY_GCSE_CX="546b37d905fd887a8"
export GATSBY_LUNGMAP_GCSE_CX="d7fb4bb7fef763ce3"
