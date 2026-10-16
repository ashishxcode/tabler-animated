"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"}],["path",{"d":"M7 16v-3a2 2 0 1 0 -4 0v1a2 2 0 0 0 3.726 1.01"}],["path",{"d":"M19 16v.01"}],["path",{"d":"M19 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[19,16.01],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,3],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const TextRegexQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextRegexQuestionIcon.displayName = "TextRegexQuestionIcon";
