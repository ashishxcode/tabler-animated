"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 9a3 3 0 0 0 -6 0"}],["path",{"d":"M12 19v3"}],["path",{"d":"M10.938 19h2.122a4.04 4.04 0 0 0 3.868 -2.82l1.775 -5.68c1.082 -3.463 -.882 -7.138 -4.386 -8.208a6.7 6.7 0 0 0 -1.96 -.292h-.716c-3.668 0 -6.641 2.939 -6.641 6.563c0 .657 .1 1.31 .296 1.937l1.775 5.68a4.04 4.04 0 0 0 3.867 2.82"}],["path",{"d":"M11 12h2"}],["path",{"d":"M12 12v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,10.5],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7.5],[12,20.5],[12,12],[12,13.5]]}];

export const ParkingMeterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ParkingMeterIcon.displayName = "ParkingMeterIcon";
