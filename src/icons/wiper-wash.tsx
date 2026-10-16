"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"}],["path",{"d":"M12 20l0 -14"}],["path",{"d":"M4 6a4 4 0 0 1 .4 -1.8"}],["path",{"d":"M7 2.1a4 4 0 0 1 2 0"}],["path",{"d":"M12 6a4 4 0 0 0 -.4 -1.8"}],["path",{"d":"M12 6a4 4 0 0 1 .4 -1.8"}],["path",{"d":"M15 2.1a4 4 0 0 1 2 0"}],["path",{"d":"M20 6a4 4 0 0 0 -.4 -1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,11.72],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[12,13],[4.2,5.1],[8,2.04],[11.8,5.1],[12.2,5.1],[16,2.04],[19.8,5.1]]}];

export const WiperWashIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WiperWashIcon.displayName = "WiperWashIcon";
