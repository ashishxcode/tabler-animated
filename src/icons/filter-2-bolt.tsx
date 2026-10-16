"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h4"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const Filter2BoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2BoltIcon.displayName = "Filter2BoltIcon";
