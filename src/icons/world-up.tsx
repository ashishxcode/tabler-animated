"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.985 12.52a9 9 0 1 0 -8.451 8.463"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h10.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.996 16.996 0 0 1 2.391 11.512"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"draw","n":[1,2,3,4,5,6],"o":[12.8,12.5],"dl":0.1,"st":0.1}];

export const WorldUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldUpIcon.displayName = "WorldUpIcon";
