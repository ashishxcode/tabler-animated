"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 8h-4v8h4"}],["path",{"d":"M17 12h2.5"}],["path",{"d":"M4 8v8h4"}],["path",{"d":"M10 8h4"}],["path",{"d":"M12 8v8"}]];
const rig: Rig[] = [{"fx":"wave","n":[1,3,4],"st":0.13,"os":[[18.25,12],[12,8],[12,12]]}];

export const SignalLteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SignalLteIcon.displayName = "SignalLteIcon";
