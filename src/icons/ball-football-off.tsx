"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73"}],["path",{"d":"M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681l.582 -.423"}],["path",{"d":"M12 7v-4"}],["path",{"d":"M15 16l2.5 3"}],["path",{"d":"M16.755 10.455l3.745 -1.455"}],["path",{"d":"M9.061 16.045l-2.561 2.955"}],["path",{"d":"M7.245 10.455l-3.745 -1.455"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[16.25,17.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2,4,5,6],"o":[12,21],"d":[0,-2.4]}];

export const BallFootballOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallFootballOffIcon.displayName = "BallFootballOffIcon";
