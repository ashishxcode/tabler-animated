"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 12a8 8 0 0 0 8 4"}],["path",{"d":"M7.5 13.5a12 12 0 0 0 8.5 6.5"}],["path",{"d":"M12 12a8 8 0 0 0 -7.464 4.928"}],["path",{"d":"M12.951 7.353a12 12 0 0 0 -9.88 4.111"}],["path",{"d":"M12 12a8 8 0 0 0 -.536 -8.928"}],["path",{"d":"M15.549 15.147a12 12 0 0 0 1.38 -10.611"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6],"o":[12,21],"d":[0,-2.4]}];

export const BallVolleyballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallVolleyballIcon.displayName = "BallVolleyballIcon";
