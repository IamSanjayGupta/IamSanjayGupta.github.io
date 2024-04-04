import axios from "axios";

//** https://cooing-north-nail.glitch.me/getLeetCodeStats/IamSanjayGupta */
// export const getLeetCodeStats = async (userName) => {
//   const corsProxy = "https://cors-anywhere.herokuapp.com/";
//   const apiUrl = "https://leetcode.com/graphql";

//   const query = `
//   query getUserProfile($username: String!) {
//     matchedUser(username: $username) {
//       username
//       submitStats: submitStatsGlobal {
//         acSubmissionNum {
//           difficulty
//           count
//           submissions
//         }
//       }
//       detailView :tagProblemCounts {
//         advanced {
//           tagName
//           problemsSolved
//         }
//         intermediate {
//           tagName
//           problemsSolved
//         }
//         fundamental {
//           tagName
//           problemsSolved
//         }
//       }
//     }
//   }`;

//   const variables = { username: userName };

//   const data = { query, variables };

//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Referer: `https://leetcode.com/${userName}/`,
//     },
//   };

//   try {
//     const response = await axios.post(corsProxy + apiUrl, data, config);
//     console.log(response.data); // data
//     console.log(response.errors); // errors if any
//   } catch (error) {
//     console.log({ error });
//   }

//   // return axios
//   //   .post(corsProxy + apiUrl, data, config)
//   //   .then((response) => response.data)
//   //   .catch((error) => console.error(error));
// };

export const getLeetCodeStats = async (userName) => {
  return axios.get(`https://cooing-north-nail.glitch.me/getLeetCodeStats/${userName}`);
};

// https://leetcode.com/graphql?query=query%20{%20matchedUser(username:%20%22IamSanjayGupta%22)%20{%20username%20submitStats:%20submitStatsGlobal%20{%20acSubmissionNum%20{%20difficulty%20count%20submissions%20}%20}%20%20detailView%20:tagProblemCounts%20{%20advanced%20{%20tagName%20problemsSolved%20}%20intermediate%20{%20tagName%20problemsSolved%20}%20fundamental%20{%20tagName%20problemsSolved%20}%20}}%20}

// https://leetcode.com/graphql?query=query%20{%20matchedUser(username:%20%22IamSanjayGutpa)%20{%20username%20submitStats:%20submitStatsGlobal%20{%20acSubmissionNum%20{%20difficulty%20count%20submissions%20}%20}%20detailView%20:tagProblemCounts%20{%20advanced%20{%20tagName%20problemsSolved%20}%20intermediate%20{%20tagName%20problemsSolved%20}%20fundamental%20{%20tagName%20problemsSolved%20}%20}%20}%20}
