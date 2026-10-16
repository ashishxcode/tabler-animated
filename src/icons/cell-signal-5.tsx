"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a.731 .731 0 0 1 1.249 .517v15.269"}],["path",{"d":"M16 7v13"}],["path",{"d":"M12 20v-9"}],["path",{"d":"M8 20v-5"}]];
const rig: Rig[] = [{"fx":"wave","n":[3,2,1],"st":0.13,"os":[[8,17.5],[12,15.5],[16,13.5]]}];

export const CellSignal5Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CellSignal5Icon.displayName = "CellSignal5Icon";
