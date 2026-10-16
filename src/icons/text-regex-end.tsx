"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"}],["path",{"d":"M7 16v-3a2 2 0 1 0 -4 0v1a2 2 0 0 0 3.726 1.01"}],["path",{"d":"M21 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M19 10v-1"}],["path",{"d":"M19 16v1"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12,12.5],"d":[2.4,0],"st":0.06}];

export const TextRegexEndIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextRegexEndIcon.displayName = "TextRegexEndIcon";
