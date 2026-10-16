"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h9.5"}],["path",{"d":"M9 18h2.5"}],["path",{"d":"M19 21.5c.205 -.849 .641 -1.625 1.258 -2.242c.617 -.617 1.393 -1.053 2.242 -1.258c-.849 -.205 -1.625 -.641 -2.242 -1.258c-.617 -.617 -1.053 -1.393 -1.258 -2.242c-.205 .849 -.641 1.625 -1.258 2.242c-.617 .617 -1.393 1.053 -2.242 1.258c.849 .205 1.625 .641 2.242 1.258c.617 .617 1.053 1.393 1.258 2.242"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,6],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.75,12],[10.25,18],[19,18]]}];

export const Filter2SparkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2SparkIcon.displayName = "Filter2SparkIcon";
