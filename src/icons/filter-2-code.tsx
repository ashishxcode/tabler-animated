"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h2"}],["path",{"d":"M17 17l-2 2l2 2"}],["path",{"d":"M20 21l2 -2l-2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"nudge","n":[2],"o":[10,18],"d":[-1.8,0]},{"fx":"nudge","n":[0,1],"o":[12,9],"d":[1.8,0]}];

export const Filter2CodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2CodeIcon.displayName = "Filter2CodeIcon";
