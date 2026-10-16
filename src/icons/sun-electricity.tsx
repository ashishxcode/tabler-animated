"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4"}],["path",{"d":"M3 12h1"}],["path",{"d":"M12 3v1"}],["path",{"d":"M12 20v1"}],["path",{"d":"M5.6 5.6l.7 .7"}],["path",{"d":"M6.3 17.7l-.7 .7"}],["path",{"d":"M20 7l-3 5h4l-3 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,6],"o":[14.5,12],"a":0.1},{"fx":"spin","n":[1,2,3,4,5],"o":[7.5,12],"a":45,"sym":true}];

export const SunElectricityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunElectricityIcon.displayName = "SunElectricityIcon";
