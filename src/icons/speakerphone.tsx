"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 8a3 3 0 0 1 0 6"}],["path",{"d":"M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"}],["path",{"d":"M12 8l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"}]];
const rig: Rig[] = [{"fx":"swing","n":[2],"o":[10.5,5.02],"a":12},{"fx":"tilt","n":[0,1],"o":[14,9],"a":7,"dl":0.07}];

export const SpeakerphoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpeakerphoneIcon.displayName = "SpeakerphoneIcon";
