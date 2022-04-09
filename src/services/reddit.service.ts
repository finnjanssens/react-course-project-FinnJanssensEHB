import React from "react";
import { XMLParser } from "fast-xml-parser";

class RedditService {
  private readonly BASE_URL =
    "https://mighty-earth-63459.herokuapp.com/https://www.reddit.com/.json";

  parser = new XMLParser();

  public async getFrontPage() {
    return fetch(this.BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch", data.data.children);

        return data.data.children;
      })
      .catch(function (error) {
        console.log("error", error);

        return error;
      });
  }
}

export const redditService = new RedditService();