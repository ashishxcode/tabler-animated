"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M4 12v-5a3 3 0 1 1 6 0v5"}],["path",{"d":"M4 9h6"}],["path",{"d":"M20 6v6"}],["path",{"d":"M4 16h12"}],["path",{"d":"M4 20h6"}],["path",{"d":"M14 20l2 2l5 -5"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12.5,13],"d":[2.4,0],"st":0.06}];

export const TextGrammarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextGrammarIcon.displayName = "TextGrammarIcon";
