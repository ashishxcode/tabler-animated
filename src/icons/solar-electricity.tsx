"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97"}],["path",{"d":"M8 6v12"}],["path",{"d":"M12 12h-8"}],["path",{"d":"M20 7l-3 5h4l-3 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[8,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,12],[19,12]]}];

export const SolarElectricityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SolarElectricityIcon.displayName = "SolarElectricityIcon";
