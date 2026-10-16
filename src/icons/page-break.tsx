"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1"}],["path",{"d":"M3 14h3m4.5 0h3m4.5 0h3"}],["path",{"d":"M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[16.5,5.5],"st":0.07},{"fx":"pop","n":[1,2,3],"o":[12,12],"a":0.04}];

export const PageBreakIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PageBreakIcon.displayName = "PageBreakIcon";
