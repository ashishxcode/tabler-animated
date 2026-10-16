"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19.25,18.51],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1],"o":[11.57,21],"d":[0,-1.8]}];

export const HomeQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeQuestionIcon.displayName = "HomeQuestionIcon";
