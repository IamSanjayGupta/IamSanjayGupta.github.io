import React from "react";
import { useEffect } from "react";
import { getLeetCodeStats } from "../utils/leetcodeApi";

const LeetcodeStats = () => {
  useEffect(() => {
    getLeetCodeStats("IamSanjayGupta");
  });

  return <div>Leetcode</div>;
};

export default LeetcodeStats;
