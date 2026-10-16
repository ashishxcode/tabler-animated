"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5"}],["path",{"d":"M5 10h7"}],["path",{"d":"M10 18l3 3l7 -7"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12.5,12.5],"d":[2.4,0],"st":0.06}];

export const TextSpellcheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextSpellcheckIcon.displayName = "TextSpellcheckIcon";
