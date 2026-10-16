"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 16v-8l2 5l2 -5v8"}],["path",{"d":"M1 16v-8"}],["path",{"d":"M5 8v8"}],["path",{"d":"M1 12h4"}],["path",{"d":"M7 8h4"}],["path",{"d":"M9 8v8"}],["path",{"d":"M20 8v8h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,5,6],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,12],[9,8]]}];

export const HtmlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HtmlIcon.displayName = "HtmlIcon";
