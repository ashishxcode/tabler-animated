"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 13c.325 2.532 1.881 4.781 4 6"}],["path",{"d":"M20 11a8.1 8.1 0 0 0 -15.5 -2"}],["path",{"d":"M4 5v4h4"}],["path",{"d":"M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}],["path",{"d":"M18 15v2a1 1 0 0 0 1 1h1"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12.25,7.51],"a":0.06},{"fx":"pop","n":[0,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,16],[6,7],[13.5,18],[19,16.5],[21,18]]}];

export const Hours24Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Hours24Icon.displayName = "Hours24Icon";
