"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728"}],["path",{"d":"M12.495 3.02a9 9 0 0 1 -9.475 9.475"}],["path",{"d":"M20.98 11.505a9 9 0 0 0 -9.475 9.475"}],["path",{"d":"M9 9l2 2"}],["path",{"d":"M13 13l2 2"}],["path",{"d":"M11 7l2 1"}],["path",{"d":"M7 11l1 2"}],["path",{"d":"M16 11l1 2"}],["path",{"d":"M11 16l2 1"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7,8],"o":[12,21],"d":[0,-2.4]}];

export const BallBaseballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BallBaseballIcon.displayName = "BallBaseballIcon";
