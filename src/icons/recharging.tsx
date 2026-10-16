"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.038 4.5a9 9 0 0 0 -2.495 2.47"}],["path",{"d":"M3.186 10.209a9 9 0 0 0 0 3.508"}],["path",{"d":"M4.5 16.962a9 9 0 0 0 2.47 2.495"}],["path",{"d":"M10.209 20.814a9 9 0 0 0 3.5 0"}],["path",{"d":"M16.962 19.5a9 9 0 0 0 2.495 -2.47"}],["path",{"d":"M20.814 13.791a9 9 0 0 0 0 -3.508"}],["path",{"d":"M19.5 7.038a9 9 0 0 0 -2.47 -2.495"}],["path",{"d":"M13.791 3.186a9 9 0 0 0 -3.508 -.02"}],["path",{"d":"M12 8l-2 4h4l-2 4"}],["path",{"d":"M12 21a9 9 0 0 0 0 -18"}]];
const rig: Rig[] = [{"fx":"pop","n":[9],"o":[16.5,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.79,5.74],[3.1,11.96],[5.74,18.21],[11.96,20.9],[18.21,18.27],[20.9,12.04],[18.27,5.79],[12.04,3.09],[12,12]]}];

export const RechargingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RechargingIcon.displayName = "RechargingIcon";
