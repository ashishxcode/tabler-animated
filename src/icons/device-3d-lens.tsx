"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.005 14.64a3.98 3.98 0 0 0 .995 -2.64"}],["path",{"d":"M12 4v16"}],["path",{"d":"M15 5v14a7 7 0 0 0 0 -14"}],["path",{"d":"M9 5v14a7 7 0 0 1 0 -14"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0],"a":0.22,"dl":0.1,"st":0.07,"os":[[18.5,13.32]]}];

export const Device3dLensIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Device3dLensIcon.displayName = "Device3dLensIcon";
