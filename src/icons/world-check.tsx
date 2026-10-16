"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.946 12.99a9 9 0 1 0 -9.46 7.995"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h13.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.997 16.997 0 0 1 2.311 12.001"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,11.99],"a":0.06},{"fx":"draw","n":[1,2,3,4],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldCheckIcon.displayName = "WorldCheckIcon";
