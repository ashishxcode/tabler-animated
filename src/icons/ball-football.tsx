"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55l4.76 -3.45"}],["path",{"d":"M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-2.4]}];

export const BallFootballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallFootballIcon.displayName = "BallFootballIcon";
