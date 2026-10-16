"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M13 12h5"}],["path",{"d":"M13 15h4"}],["path",{"d":"M13 18h1"}],["path",{"d":"M13 9h4"}],["path",{"d":"M13 6h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[15.5,12],[15,15],[13.5,18],[15,9],[13.5,6]]}];

export const ShadowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShadowIcon.displayName = "ShadowIcon";
